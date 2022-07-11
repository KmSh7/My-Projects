#include<AFMotor.h>
#include<Servo.h>
int posn=90;
int rnd,d1,t;
int i=1;
Servo s1;
int trg=0;
int ech=9;

void setup() {
s1.attach(7);
pinMode(trg,OUTPUT);
pinMode(ech,INPUT);
Serial.begin(9600);
s1.write(posn);
}

void loop() {
for(int j=0;j<=2;j++)
{
digitalWrite(trg,LOW);
delayMicroseconds(10);
digitalWrite(trg,HIGH);
delayMicroseconds(10);
digitalWrite(trg,LOW);
t=pulseIn(ech,HIGH);
d1=t*0.0167999;//distance in cm
Serial.print(d1);
delay(250);
}
if(d1>25 && d1<35 )
{ 
 if(d1<25 or d1>35)
 {
    rnd=random(1);
    if(rnd=1)
    {
      while((d1<=(d1-9))&&(d1>=d1+9))
      {
        s1.write(posn-i);
        delay(5);
        digitalWrite(trg,LOW);
        delayMicroseconds(5);
        digitalWrite(trg,HIGH);
        delayMicroseconds(5);
        digitalWrite(trg,LOW);
        t=pulseIn(ech,HIGH);
        d1=t*0.0167999;
        i+=1;
      }
      s1.write(posn-i);
      }
      else
      {
       while((d1<=(d1-9))&&(d1>=d1+9))
      {
        s1.write(posn+i);
        delay(5);
        digitalWrite(trg,LOW);
        delayMicroseconds(5);
        digitalWrite(trg,HIGH);
        delayMicroseconds(5);
        digitalWrite(trg,LOW);
        t=pulseIn(ech,HIGH);
        d1=t*0.0167999;
        i+=1;
      }
      s1.write(posn+i);
      }
    }
  else
  {
  s1.write(posn);
  }  
 }
else
{
while(d1<25 and d1>35)
{
 
  for(int k=0;k<=180;k+=1)
  {
   s1.write(k);
   delay(5);
   digitalWrite(trg,LOW);
   delayMicroseconds(10);
   digitalWrite(trg,HIGH);
   delayMicroseconds(10);
   digitalWrite(trg,LOW);
   t=pulseIn(ech,HIGH);
   posn=k;
   d1=t*0.0167999;
     
  }
  for(int k=180;k>=0;k-=1)
  {
   s1.write(k);
   delay(5);
   digitalWrite(trg,LOW);
   delayMicroseconds(10);
   digitalWrite(trg,HIGH);
   delayMicroseconds(10);
   digitalWrite(trg,LOW);
   t=pulseIn(ech,HIGH);
   posn=k;
   d1=t*0.0167999;

  
  }
}
s1.write(posn);
}

}
