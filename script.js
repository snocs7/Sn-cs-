```javascript
// رسالة في Console للتأكد أن JavaScript يعمل
console.log("SNOCS7 website loaded successfully");


// تأثير بسيط عند الضغط على أي رابط

const links = document.querySelectorAll(".link");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log(
            "Opening:",
            link.innerText.trim()
        );

    });

});
```
