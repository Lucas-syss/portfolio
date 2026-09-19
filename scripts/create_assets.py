from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

OUT = Path(__file__).resolve().parents[1] / 'public'
OUT.mkdir(exist_ok=True)
FONT = Path('C:/Windows/Fonts')
pdfmetrics.registerFont(TTFont('Arial', str(FONT/'arial.ttf')))
pdfmetrics.registerFont(TTFont('Arial-Bold', str(FONT/'arialbd.ttf')))
pdfmetrics.registerFontFamily('Arial',normal='Arial',bold='Arial-Bold',italic='Arial',boldItalic='Arial-Bold')
W,H = 595.276,841.89
c = canvas.Canvas(str(OUT/'lucas-cleminson-cv.pdf'),pagesize=(W,H),pageCompression=1)
c.setTitle('Lucas Cleminson - Frontend Developer')
c.setAuthor('Lucas Cleminson')
c.setSubject('Frontend development experience and Software Engineering progression')
ink,muted,accent = '#262923','#555c51','#465b35'
left,right,y=42,553,798

def para(text,size=9.4,leading=13.4,color=ink,space=6,bold=False):
    global y
    style=ParagraphStyle('p',fontName='Arial-Bold' if bold else 'Arial',fontSize=size,leading=leading,textColor=HexColor(color))
    p=Paragraph(text,style)
    _,h=p.wrap(right-left,800)
    p.drawOn(c,left,y-h)
    y-=h+space

def section(label):
    global y
    y-=9
    c.setStrokeColor(HexColor('#d5dacd'));c.setLineWidth(.6);c.line(left,y,right,y)
    y-=16
    para(label.upper(),8.7,10,color=accent,space=9,bold=True)

def role(title,date):
    global y
    c.setFont('Arial-Bold',10);c.setFillColor(HexColor(ink));c.drawString(left,y-10,title)
    c.setFont('Arial',8.6);c.setFillColor(HexColor(muted));c.drawRightString(right,y-10,date)
    y-=23

para('Lucas Cleminson',27,30,space=5,bold=True)
para('Frontend Developer | Software Engineering applicant',10.4,14,color=accent,space=8)
para('Albufeira, Portugal · <link href="mailto:cleminsonlucas4@gmail.com">cleminsonlucas4@gmail.com</link> · +351 918 629 915',8.7,12,space=3)
para('<link href="https://github.com/Lucas-syss">github.com/Lucas-syss</link> · <link href="https://www.linkedin.com/in/lucas-cleminson">linkedin.com/in/lucas-cleminson</link>',8.7,12,space=1)

section('Professional profile')
para('Frontend developer with production experience at PulsifyAI, building public websites and redesigning application interfaces as the sole frontend developer within a team. Completed a two-year Web Development programme at ETIC Algarve; applying for Year 3 entry into Software Engineering at Teesside University.',space=0)

section('Experience')
role('PulsifyAI | Frontend Development Intern','29 June 2026 - Present')
para('• Built <link href="https://pulsifyai.com">pulsifyai.com</link> from scratch using React, JavaScript, Three.js and WebGL shaders, translating the CEO’s section requirements into the finished frontend.',space=4)
para('• Designed and built <link href="https://labs.pulsifyai.com">labs.pulsifyai.com</link>; redesigned the <link href="https://imocoach.com">ImoCoach</link> application, admin interface and public landing page.',space=4)
para('• Redesigned a confidential internal application while preserving familiar workflows; improved navigation, forms, table readability and copy actions.',space=4)
para('• Adapted interfaces for desktop, tablet and mobile and tested functionality manually.',space=10)
role('Kapta | Backend Developer Intern','April - July 2022')
para('Assisted in API development and database management, gaining experience with server-side logic and real-world development workflows.',space=0)

section('Selected academic projects')
para('<b>Stone Saints - Individual storefront project.</b> Built a clothing and jewellery website with Stripe and Google sign-in integration. Public demo available; payments and Google sign-in are currently disabled. <link href="https://stonesaints.vercel.app/">stonesaints.vercel.app</link>',space=7)
para('<b>SmartFlow - Second-year team project.</b> Contributed frontend pages and backend functionality to a two-person prototype exploring traffic priority for emergency vehicles.',space=0)

section('Education')
para('<b>ETIC Algarve - Web Development</b> · Two-year programme completed July 2026.',space=5)
para('<b>Teesside University - Software Engineering</b> · Applying for Year 3 entry.',space=5)
para('<b>Escola Secundária de Albufeira</b> · 2019-2022<br/>12th year: Gestão e Programação de Sistemas Informáticos.',space=0)

section('Technical skills & languages')
para('<b>Frontend:</b> React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS; responsive layouts, reusable components, interface animation, Three.js and WebGL shaders.',space=4)
para('<b>Backend & tools:</b> API development, Express, Stripe and Google sign-in integration, Vite, Git, GitHub, manual testing.',space=4)
para('<b>Languages:</b> Portuguese (fluent), English (fluent).',space=0)
if y < 35: raise RuntimeError(f'CV content too tall: bottom {y}')
c.save()
print(f'Created one-page CV. Bottom margin: {y:.1f} pt')

img=Image.new('RGB',(1200,630),'#f6f5f0');draw=ImageDraw.Draw(img)
font=lambda size,bold=False: ImageFont.truetype(str(FONT/('arialbd.ttf' if bold else 'arial.ttf')),size)
draw.text((65,60),'lc.',font=font(45,True),fill=ink)
draw.line((65,135,1135,135),fill='#d9dcd1',width=2)
draw.text((65,195),'Lucas Cleminson.',font=font(77,True),fill=ink)
draw.text((65,307),'Frontend first.',font=font(47),fill=ink)
draw.text((65,371),'Software engineering next.',font=font(47),fill=accent)
draw.text((65,537),'SELECTED WORK  /  FRONTEND DEVELOPMENT',font=font(20),fill=muted)
img.save(OUT/'og-image.png',optimize=True)
icon=Image.new('RGB',(180,180),ink);draw=ImageDraw.Draw(icon)
draw.text((35,20),'lc',font=font(108,True),fill='#f6f5f0')
draw.ellipse((133,119,147,133),fill='#d6dfb9');icon.save(OUT/'apple-touch-icon.png')

