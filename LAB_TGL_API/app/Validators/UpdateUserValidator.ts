import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public refs = schema.refs({
    id: this.ctx.auth.user?.id,
  })

  public schema = schema.create({
    email: schema.string.optional({ trim: true }, [
      rules.requiredWhen('email', '=', ''),
      rules.email(),
      rules.unique({
        table: 'users',
        column: 'email',
        caseInsensitive: true,
        whereNot: {
          id: this.refs.id,
        },
      }),
    ]),
    password: schema.string.optional({}, [rules.requiredWhen('password', '=', '')]),
    confirmPassword: schema.string.optional({}, [rules.requiredIfExists('password')]),
    oldPassword: schema.string.optional({}, [rules.requiredIfExists('confirmPassword')]),
    name: schema.string.optional({ escape: true }, [rules.requiredWhen('name', '=', '')]),
  })

  public messages = {}
}
