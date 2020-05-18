import { authMiddleware } from '../index'
import { authorize } from '@app/helpers/jwt'

jest.mock('@app/helpers/jwt')

describe('#authMiddleware', () => {
  beforeEach(() => {
    //console.log = jest.fn()
    console.error = jest.fn()

    jest.resetAllMocks()
  })

  test('it calls jwt.authorize and assigns the result to Request', async () => {
    ;(authorize as jest.Mock).mockReturnValueOnce({ auth: 'bar' })
    const next = jest.fn()
    let request = {
      headers: [],
    }

    await authMiddleware(request, {}, next)

    expect(authorize).toHaveBeenCalledTimes(1)
    expect(authorize).toHaveBeenCalledWith(request.headers)
    expect(next).toHaveBeenCalledTimes(1)
    expect(request.auth).toEqual('bar')
  })
})
