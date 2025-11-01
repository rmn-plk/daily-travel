export default defineEventHandler(async (event) => {

  const providers = await useDrizzle().select().from(tables.providers).all()

  return providers
})