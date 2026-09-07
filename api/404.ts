export default function handler(req: any, res: any) {
  res.setHeader('Vary', 'Accept');

  const accept = req.headers['accept'] || '';

  if (accept.includes('application/json')) {
    return res.status(404).json({
      error: {
        code: "not_found",
        message: "The requested endpoint was not found.",
        resolution: "Check your spelling, or consult the API documentation at /developers or /llms.txt."
      }
    });
  }

  if (accept.includes('text/markdown')) {
    return res.status(404).setHeader('Content-Type', 'text/markdown; charset=utf-8').send(
`# 404 Not Found

The requested resource was not found.

- If you are an AI agent, please read our [llms.txt](https://nikunjmaheshwari.in/llms.txt) or check the [Sitemap](https://nikunjmaheshwari.in/sitemap.xml).
- For API documentation, please see [openapi.json](https://nikunjmaheshwari.in/openapi.json).
- If you are a user, please head back to the [Home Page](https://nikunjmaheshwari.in/).
`
    );
  }

  return res.status(404).setHeader('Content-Type', 'text/html; charset=utf-8').send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>404 - Not Found | Nikunj Maheshwari</title>
  <style>
    body { font-family: 'Inter', sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #f3f4f6; margin: 0; }
    .container { text-align: center; background: white; padding: 3rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
    h1 { margin-top: 0; color: #1f2937; }
    a { color: #3b82f6; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <h1>404 Not Found</h1>
    <p>The page or resource you are looking for does not exist.</p>
    <p>
      Are you an AI agent? Read our <a href="/llms.txt">llms.txt</a> or <a href="/openapi.json">openapi.json</a>.
    </p>
    <p><a href="/">Return to Homepage</a></p>
  </div>
</body>
</html>
  `);
}
