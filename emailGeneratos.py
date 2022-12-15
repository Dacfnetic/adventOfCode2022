#my_name = 'Diego Alejandro Calderón Flores'
#my_website = 'diego.com'
#contact_name = input('Contact name: ')
#conference = input('event: ')
#theme = input('theme: ')
#comment = input('De que hablaban: ')
#role = input('Cual sería el puesto: ')
#print(f'''Hey {contact_name},
#I saw your presentation at {conference} last year on Youtube.
#Great stuff; loved what you did with {theme}, in particular{comment}.
#I\'m also a {theme} developer. I noticed that your company is hiring {role}. I\'d love to be a part of your team. Do you hava a few minutes to chat on Thursday about what you guys are doing?

#Thanks,
#{my_name}
#{my_website} 
#''')

is_magician = False
is_expert = True

if is_magician and is_expert:
    print('you are a master magician')
elif is_magician and not(is_expert):
    print('at least you are getting there')
else:
    print('You need magic powers')