Example curl to upload:

curl -X POST http://localhost:4000/upload \
  -F "file=@/path/to/contacts.xlsx" \
  -F "subject=Interview Invitation" \
  -F "html=<h1>Hi {{name}}</h1><p>Please join our interview...</p>"
