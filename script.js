const translatedText = 'text is translate here';
var s="en";
var d="ar";

document.getElementById('t2').textContent = translatedText;


//Api mymemory
 const translateText = async (text ) => {
   
    const url = `http://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${s}|${d}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data && data.responseData && data.responseData.translatedText) {
        const translatedText = data.responseData.translatedText;
      console.log(`Translated Text: ${translatedText}`);
      document.getElementById('t2').value=translatedText;
       } else {
        console.error('Translation error:', data);
      }
    } catch (error) {
      console.error('Translation error:', error);
    }
  };
  



  const translateButton = document.getElementById('submitBtn');
  translateButton.addEventListener('click', () => {
    const textToTranslate = document.getElementById('texttranslationFrom').value;
    console.log(textToTranslate);
    translateText(textToTranslate);
  });



 


  function clearall() {
            document.getElementById('texttranslationFrom').value= "";
          var t=  document.getElementById('t2');
          t.value = (t.value === "text is translate here") ? "text is translate here" : "" ;
        }
        
  
  function handleImageUpload(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
      var imagePath = e.target.result;
       document.getElementById("logo").src =imagePath;
    };

    reader.readAsDataURL(file);
    

  }


  function copyText() {
    const textToCopy = document.getElementById('t2');
  
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999); 
  
    document.execCommand('copy');
    const notification = document.getElementById('notification');

    notification.textContent = 'Text was clipboard!';
    notification.style.display = 'block';

  setTimeout(function() {
    notification.style.display = 'none';
  }, 3000);
  }
  

  function changelang()
  {
    var x = s;
    s=d;
    d=x;
    document.getElementById('lan1').textContent= (s=="ar")? "Arabic":"English";
    document.getElementById('lan2').textContent= (d=="ar")? "Arabic":"English";

    console.log("s"+s);
    console.log("d"+d);

  }


///////////////////////////////////////////////////


/* DeepL API
const translateText = async (text) => {
  const apiKey = 'YOUR_API_KEY';  

  const url = 'https://api.deepl.com/v2/translate';
  const data = {
    text: text,
    target_lang: d  
    auth_key: apiKey,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data),
    });

    const responseData = await response.json();

    if (responseData && responseData.translations && responseData.translations.length > 0) {
      const translatedText = responseData.translations[0].text;
      console.log(`Translated Text: ${translatedText}`);
      document.getElementById('t2').value=translatedText;

    } else {
      console.error('Translation error:', responseData);
    }
  } catch (error) {
    console.error('Translation error:', error);
  }
};

// Usage
const textToTranslate =  document.getElementById('texttranslationFrom').value;
translateText(textToTranslate);

*/

//Google Api (is not free)

/*
function translateText() {
  const textToTranslate = document.getElementById('texttranslationFrom').value;
  const targetLanguage = b;  

  const apiKey = 'YOUR_API_KEY';  

  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  const data = {
    q: textToTranslate,
    target: targetLanguage,
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      const translatedText = data.data.translations[0].translatedText;
     document.getElementById('t2').value=translatedText;
    })
    .catch(error => {
      console.error('Translation error:', error);
    });
}
*/