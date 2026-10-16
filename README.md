# Formula Tracker

## Om sidan
Sidan ska vara en typ av "tracker", alltså en sida där du kan hålla koll på alla formel 1 loppen och vart alla förare och lag ligger till.

## Skiss
Jag har tagit inspiration från den officiella kalender sidan men har även skapat en AI version med hjälp av figma. Se skiss.jpg i images.

## Funktionalitet
När du öppnar sidan börjar du automatiskt på Index filen vilket innehåller hela kalendern för formel 1 säsongen. Där kan du se när nästa lopp händer, platsen och om loppet har redan skett så ser du vem har slutat på topp-3 platserna.
Sedan kan du navigera till "Standings" vilket tar dig till drivers.html filen som visar hur många poäng alla förare har och vart de ligger. Ovanför tabellen har du möjligheten att byta till teams' standings som visar upp lagets poäng istället.

## AI-användning
Jag har använt AI för nav-menyn för mindre skärmar/mobilen. Jag bad för en "hamburger menu" med minimala ändringar till min existerande nav meny. AI:n gav mig rätta ARIA attributer för HTML men även korrekta CSS ändringar så att menyn fungerar rätt på mindre skärmar.

Jag har även använt AI för att debugga och lösa vissa problem, som till exempel header och footer buggar som jag hade. 
Buggen var att två olika headers ladda in på index.html. Jag dela min index.html, drivers.html, style.css och header.js så att den kan hjälpa mig lösa det, vilket den lyckades. Problemet var att jag ladda in min header och nav bar två gånger, en gång i min index.html och en gång i min header.js, 
vilket är ansvarig för att ladda in headern och footer på varje sida istället för att bygga om det varje gång. 

## Tekniska val (VG)
I början av projektet valde jag att använda Flexbox för att fixa layouten av kalendern. Tanken var att istället för att skriva 23 stycken divs för varje kort skulle jag använde mig av DOM-manipulation för att skapa alla korten. 
Jag lyckades inte med och byte istället till en CSS-Grid som är också skriven för hand i index.html och CSS. Däremot så lyckades jag få standings tabellen att bli skriven genom DOM-Manipulation
Istället för att ha allt inom drivers och team html filerna, skapa jag två stycken const arrays med all info om föraren och lagen som sedan skrivs ut genom en for-loop.

## Bedömning av AI-innehåll (VG)
Jag avgjorde ifall jag ville behålla AI innehåll genom att testa det och se resultaten, särskillt inom CSS. Många gånger har jag haft problem och svårigheter med att placera element med hjälp av CSS. 
Ifall jag inte kunde lösa det själv bad jag AI för hjälp och testa vad jag fick, vilket i flesta fall inte löste problemet. 
Väldigt stor del av AI CSS har jag antingen tagit bort helt eller ändrat, då den inte löste problemet och i värsta fall gjorde problemet värre.
