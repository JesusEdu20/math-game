
export const prerender = false
export async function GET() {
  const product = {
    saludo:"hello world"
  }

  return new Response(
    JSON.stringify(product), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};