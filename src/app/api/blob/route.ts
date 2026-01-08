import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const normalizePath = (value: string) => value.replace(/^\/+/, '');

export async function POST(request: Request) {
  const uploadToken = process.env.BLOB_UPLOAD_TOKEN;
  const authHeader = request.headers.get('authorization');

  if (uploadToken && authHeader !== `Bearer ${uploadToken}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const contentType = request.headers.get('content-type') ?? '';

  if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    const file = formData.get('file');
    const pathValue = formData.get('path');

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: 'Missing file field.' },
        { status: 400 },
      );
    }

    const filename =
      typeof pathValue === 'string' && pathValue.trim().length > 0
        ? normalizePath(pathValue)
        : file.name;
    const arrayBuffer = await file.arrayBuffer();
    const blob = new Blob([arrayBuffer], {
      type: file.type || 'application/octet-stream',
    });

    const { url } = await put(filename, blob, {
      access: 'public',
      contentType: file.type || undefined,
    });

    return NextResponse.json({ url });
  }

  if (contentType.includes('application/json')) {
    const body = (await request.json()) as {
      path?: string;
      content?: string;
      contentType?: string;
    };
    const pathValue = body.path?.trim();
    const contentValue = body.content ?? '';

    if (!pathValue) {
      return NextResponse.json(
        { error: 'Missing path field.' },
        { status: 400 },
      );
    }

    const { url } = await put(normalizePath(pathValue), contentValue, {
      access: 'public',
      contentType: body.contentType,
    });

    return NextResponse.json({ url });
  }

  return NextResponse.json(
    { error: 'Unsupported content type.' },
    { status: 415 },
  );
}
