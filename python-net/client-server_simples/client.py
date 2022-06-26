#!/usr/bin/python           # This is client.py file

import socket               # Import socket module

s = socket.socket()         # Create a socket object
host ="10.42.0.1" # Get local machine name

port = 12334    # Reserve a port for your service.
print(host)
s.connect((host, port))
print(s.recv(1024))
s.close()                     # Close the socket when do#ne
