import ollama

def generateChat(user, message):
     
    response = ollama.chat(model='llama3', messages=[
      {
        'role': 'user',
        'content': 'Meu nome é: ' + user + ', ' + message,
      },
    ])
         
    return(response['message']['content'])
