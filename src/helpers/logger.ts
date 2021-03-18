const createOutputJson = (level: string, message: string, stacktrace?: string): string => {
  return `{
  "level": "${level}",
  "message": "${message}",
  "stacktrace": "${stacktrace ?? ''}"
}`
}

const debug = (message: string, stacktrace?: string) => {
  console.debug(createOutputJson('debug', message, stacktrace))
}

const info = (message: string, stacktrace?: string) => {
  console.info(createOutputJson('info', message, stacktrace))
}

const warn = (message: string, stacktrace?: string) => {
  console.warn(createOutputJson('warn', message, stacktrace))
}

const error = (message: string, stacktrace?: string) => {
  console.warn(createOutputJson('error', message, stacktrace))
}

export default {
  debug,
  info,
  warn,
  error
}