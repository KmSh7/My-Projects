from asyncio.windows_events import NULL
import speech_recognition as sr
import pyttsx3 as px
import datetime as dt
import random
import wikipedia as wiki
import webbrowser 
import os


'''
to recognize audio using internet
'''
r1=sr.Recognizer()#listening object

'''
below 3 lines of code is for speaking and selecting voice
'''
engine = px.init("sapi5")#speaking object
v=engine.getProperty("voices")#importing voices provided by windows
engine.setProperty("voice",v[0].id)#selecting one of those voices
def speak(audio):
    engine.say(audio)
    engine.runAndWait()
    return NULL

def hearing():
    with sr.Microphone() as source: #listening through pc's microphone
        hearing_confirmation=["I am listening, you shall speak","You shall speak now sir","i am all ears sir you can speak if you may","i am all ears sir","i can hear how sir"]
        engine.say(random.choice(hearing_confirmation))
        engine.runAndWait()
        my_audio=r1.listen(source)#listening
        try:
            audio_in_string=r1.recognize_google(my_audio)
            return audio_in_string.lower()
        except sr.UnknownValueError:
            engine.say("Sorry sir I am not able to process your words")
            engine.say("you might have to repeat")
            engine.runAndWait()
        except sr.RequestError:
            engine.say("You are offline sir")
            
'''
Below you have assistant's greeting way
'''
def mrn_greet():
    l=["A very good morning sir","I hope you are as bright as it is the day outside","Good morning sir","greetings sir"]
    i=random.choice(l)
    return i
def eve_greet():
    l=["A very good evening sir","Greetings sir","good evening sir"]
    i=random.choice(l)
    return i
def aftn_greet():
    l=["A very good afternoon sir","Greetings sir","good Afternoon sir"]
    i=random.choice(l)
    return i
def night_greet():
    l=["I hope you had a good day sir","Seems you are working a bit late sir"]

def greetins():
    x=dt.datetime.now()
    y=int(x.hour)
    if((y>=0) and (y<=11)):
        engine.say(mrn_greet())
    elif((y>11) and (y<=16)):
        engine.say(aftn_greet())
    elif((y>16) and (y<=20)):
        engine.say(eve_greet())
    else:
        engine.say(night_greet())

'''
conversation
'''
def conversation(sir_says):
    greetings_back=["hi assistant","hi","hello"]
    wassup=["hey wassup","hello wassup","hey how you been","hello how you have been","sup","hey whats up","hey how have you been"]
    hm=["hmmm","hmmmmm","hmm","hm"]
    if sir_says in greetings_back:
        engine.say("Hello sir")
        engine.runAndWait()
    elif sir_says in wassup:
        engine.say("Been good sir thanks for asking")
        engine.runAndWait()
    else:
        engine.say("hmmm")
        engine.runAndWait()

'''
function for different tasks
'''
def tasks(sir_says):
    if "wikipedia" in sir_says:
        engine.say("Searching wikipedia")
        sir_says=sir_says.replace("wikipedia","")
        try:
            results=wiki.summary(sir_says,sentences=2)
            print(results)
            engine.say(results)
            engine.runAndWait()
            return NULL

        except:
            engine.say("wikipedia is in denial, sorry sir")
            engine.runAndWait()
            return NULL
    elif "open youtube" in sir_says:
        speak("opening you tube")
        try:
            webbrowser.open("youtube.com")
            return NULL
        except:
            engine.say("youtube is in denial, sorry sir")
            engine.runAndWait()     
            return NULL   
    elif "open jp" in sir_says:
        speak("opening webportal")
        try:
            webbrowser.open("https://webportal.jiit.ac.in:6011/studentportal/#/")
            return NULL
        except:
            engine.say("webportal is in denial, sorry sir")
            engine.runAndWait()
            return NULL
    elif "open google" in sir_says:
        speak("opening google")
        try:
            webbrowser.open("www.google.com")
            return NULL
        except:
            engine.say("google is in denial, sorry sir")
            engine.runAndWait()
            return NULL
    elif "open webportal" in sir_says:
        speak("opening webortal")
        try:
            webbrowser.open("https://webportal.jiit.ac.in:6011/studentportal/#/")
            return NULL
        except:
            engine.say("webportal is in denial, sorry sir")
            engine.runAndWait()
            return NULL
    elif "open webkoisk" in sir_says:
        speak("opening webkoisk")
        try:
            webbrowser.open("https://webkiosk.jiit.ac.in/")
            return NULL
        except:
            engine.say("webkoisk is in denial, sorry sir")
            engine.runAndWait()
            return NULL
    elif "play my music" in sir_says:
        speak("playing music")
        music_directory="D:\\basic_data\\music\\audio" #locating file containing songs
        song= os.listdir(music_directory)#all songs as a list in object 'song'
        os.startfile(os.path.join(music_directory,song[random.randint(0,len(song)-1)]))
        return NULL
    elif "what's the time" in sir_says:
        x=dt.datetime.now()
        h=str(x.hour)
        m=str(x.minute)
        s=str(x.second)
        speak(h+" hours "+m+" minutes and "+s+" seconds")
        return NULL
    elif "whatsapp" in sir_says:
        path="C:\\Users\\Kumar\\Desktop\\WhatsApp"
        os.startfile(path)
        return NULL
    elif "send email" in sir_says:
        try:
            speak("opening gmail")
            webbrowser.open("www.gamil.com")
            return NULL
        except:
            speak("Sending email was unsuccessfull")
            return NULL
    elif "open chrome" in sir_says:
        path2="C:\\Users\\Kumar\\Desktop\\KUMAR  SHASWAT - Chrome"
        os.startfile(path2)
    else:
        engine.say("either web is in denial or i am having issues with my processing abilities sorry sir")
        engine.runAndWait()
        return NULL




#this is main code
if __name__=="__main__":
    greetins()
    engine.say("How can I help you sir?")

    while(1):
        sir_says=hearing() 
        print(sir_says)
        greetings_back=["hi assistant","hi","hello","hmmm","hmmmmm","hmm","hm","hey wassup","hello wassup","hey how you been","hello how you have been","sup","hey how have you been","hey how are you"]
        if sir_says=="stop" or sir_says=="shut up" or sir_says=="keep you mouth shut" or sir_says=="you shall rest" or sir_says=="you shall rest now":
            engine.say("Good bye sir")
            engine.runAndWait()
            break
        if sir_says in greetings_back:
            conversation(sir_says)
        else:
            tasks(sir_says)




        