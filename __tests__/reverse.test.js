import reverse from '../src/reverse.js'
import { readFileSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const readFixture = (filename) => {
  return readFileSync(join(__dirname, "..", "__fixtures__", filename), "utf-8");
}

test('reverse', () => {
  const text = readFixture("initial.txt")
  const result = readFixture("result.txt")

  expect(reverse(text)).toEqual(result)
})