import { handle } from 'hono/vercel'
import { app } from '../_hono'

export const runtime = 'nodejs'
export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)
export const OPTIONS = handle(app)
export const HEAD = handle(app)
export const PATCH = handle(app)
export const CONNECT = handle(app)
export const TRACE = handle(app)