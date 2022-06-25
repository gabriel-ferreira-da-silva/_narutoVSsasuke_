import http.server
import socketserver

PORT =8071

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer( ("10.42.0.1", PORT), Handler ) as http:
    print("servind at port " , PORT)
    http.serve_forever()
