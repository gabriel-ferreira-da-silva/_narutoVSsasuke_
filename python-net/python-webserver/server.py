import http.server
import socketserver

PORT =8080
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer( ("", PORT), Handler ) as http:
    print("servind at port " , PORT)
    http.serve_forever()