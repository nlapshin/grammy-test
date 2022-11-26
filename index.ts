import { Bot, Context } from 'grammy'
import { hydrate, HydrateFlavor } from '@grammyjs/hydrate'

export type IContext = HydrateFlavor<Context>

export class Reply {
  async replyWrap(ctx: IContext, reply: string) {
    console.log('before')

    const res = await ctx.reply(reply)

    console.log('after')

    return res
  }
}

const bot = new Bot<IContext>('token')
bot.use(hydrate)

const reply = new Reply()

bot.on('message', async (ctx: IContext) => {
  await reply.replyWrap(ctx, 'messages')
})
