#!/usr/bin/env node
const { spawn } = require('child_process')
const data = require('./full-icu')
const env = data.icu_small ? {
  ...process.env,
  NODE_ICU_DATA: data.datPath()
} : process.env
const isWin = process.platform === 'win32'
const cmd = isWin ? 'node' : '/usr/bin/env'
const args = process.argv.slice(2)
if (!isWin) {
  args.unshift('node')
}

spawn(cmd, args, { env, stdio: 'inherit' })
