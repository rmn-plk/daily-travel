

export default defineEventHandler(async (event) => {
  try {
    return [
      {
        id: 1,
        title: "name"
      }
    ];
  } catch (error) {
    console.error('Error fetching cities:', error)
  }
})