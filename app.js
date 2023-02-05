const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <body style="background-color: lightgreen;">
        <style>
          form {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
            background-color: white;
            border-radius: 0.5rem;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
          }
          input, select {
            padding: 0.5rem;
            margin: 1rem 0;
            width: 20rem;
            border-radius: 0.25rem;
            border: 1px solid gray;
            font-size: 1.2rem;
          }
          button {
            padding: 0.5rem;
            margin: 1rem 0;
            background-color: blue;
            color: white;
            border-radius: 0.25rem;
            border: none;
            font-size: 1.2rem;
          }
        </style>
        <form>
          <input type="text" placeholder="Ingresa tu Nombre">
          <input type="email" placeholder="Ingresa tu Correo>
          <select>
            <option value="" disabled selected>Selecciona tu Genero</option>
            <option value="male">Hombre</option>
            <option value="female">Mujer</option>
            <option value="other">Otro</option>
          </select>
          <button>Submit</button>
        </form>
      </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
