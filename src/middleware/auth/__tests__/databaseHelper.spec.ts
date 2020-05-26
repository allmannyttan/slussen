import { setUserFailedLoginAttempts, setUserLocked, getUser } from '../databaseHelper'
import { query } from '@app/adapters/postgres'

jest.mock('@app/adapters/postgres')

describe('#auth databaseHelper', () => {
  beforeEach(() => {
    //console.log = jest.fn()
    console.error = jest.fn()

    jest.resetAllMocks()
  })

  describe('#setUserFailedLoginAttempts', () => {
    test('it sets failed login attempts in users table', async () => {
      ;(query as jest.Mock).mockResolvedValue({})

      await setUserFailedLoginAttempts(1, 1337)

      expect(query).toHaveBeenCalledTimes(1)
      expect(query.mock.calls[0][0]).toMatchInlineSnapshot(`
              SQLStatement {
                "strings": Array [
                  "
                  UPDATE \\"users\\" 
                  SET failed_login_attempts = ",
                  "
                  WHERE id = ",
                  "
                ",
                ],
                "values": Array [
                  1337,
                  1,
                ],
              }
          `)
    })
  })

  describe('#setUserLocked', () => {
    test('it sets user locked status', async () => {
      ;(query as jest.Mock).mockResolvedValue({})

      await setUserLocked(1, true)

      expect(query).toHaveBeenCalledTimes(1)
      expect(query.mock.calls[0][0]).toMatchInlineSnapshot(`
        SQLStatement {
          "strings": Array [
            "
            UPDATE \\"users\\" 
            SET locked = ",
            "
            WHERE id = ",
            "
          ",
          ],
          "values": Array [
            true,
            1,
          ],
        }
      `)
    })
  })

  describe('#getUser', () => {
    test('it gets user with camel casing', async () => {
      ;(query as jest.Mock).mockResolvedValue([
        {
          id: 1337,
        },
      ])

      const result = await getUser('testname')

      expect(result).toEqual({ id: 1337 })
      expect(query).toHaveBeenCalledTimes(1)
      expect(query.mock.calls[0][0]).toMatchInlineSnapshot(`
        SQLStatement {
          "strings": Array [
            "
              SELECT
                id,
                username,
                password_hash as \\"passwordHash\\",
                salt,
                locked,
                disabled,
                failed_login_attempts as \\"failedLoginAttempts\\"
              FROM users
              WHERE username = ",
            "
            ",
          ],
          "values": Array [
            "testname",
          ],
        }
      `)
    })
  })
})
