#!/usr/bin/python           # This is server.py file

import socket               # Import socket module

s = socket.socket()         # Create a socket object
host = "192.168.1.0"
port = 12363                # Reserve a port for your service.
print(host)

s.bind((host, port))        # Bind to the port
#s.connect((host, port))        # Bind to the port

s.listen(5)

while True:
   c, addr = s.accept()     # Establish connection with client.
   print('Got connection from', addr)
   c.send(b'Thank you for connecting'  )
   c.close()                # Close the connect
