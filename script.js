// script.js

document.getElementById('saveImage').addEventListener('click', function() {
    const VisaNo = document.getElementById('VisaNo').value || "-";
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const Dateofbirth = document.getElementById('Dateofbirth').value || "-";
    const country = document.getElementById('country').value || "-";
    const PassportNo = document.getElementById('PassportNo').value || "-";
    const ped = document.getElementById('ped').value || "-";
    const StatusofStay = document.getElementById('StatusofStay').value || "-";
    const Year = document.getElementById('Year').value || "03Year(s)";
    const NumberofEntries = document.getElementById('NumberofEntries').value || "Single(s)";
    const Dateoflssue = document.getElementById('Dateoflssue').value || "-";
    const ValidityPeriodofVisa = document.getElementById('ValidityPeriodofVisa').value || "-";
    const Remarkds = document.getElementById('Remarkds').value || "HSBE22010230";

    const imageUpload = document.getElementById('imageUpload').files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const outputWindow = window.open('', '', 'width=674.5,height=953.5');
        outputWindow.document.write(`
            <html>
            <head>
                <link rel="stylesheet" href="styles-output.css">
            </head>
            <body>
                <div id="capture">
                    <img src="https://github.com/useronlineid/visakorean/blob/main/KR1.jpg?raw=true" alt="Background Image">
                    <div id="imagePreview">
                        <img src="${e.target.result}" alt="Uploaded Image">
                    </div>
                    <p style="position: absolute; top: 126px; left: 62px; color:#000000; font-size: 11px; font-weight: bold;">Visa No. (사증번호) : ${VisaNo}</p>     

                    <p style="position: absolute; top: 179px; left: 345px; color:#000000; font-size: 11px; font-weight: bold;">${accountNumber}</p>     

                    <p style="position: absolute; top: 205px; left: 345px; color:#000000; font-size: 11px; font-weight: bold;">${Dateofbirth}</p>     

                    <p style="position: absolute; top: 230px; left: 345px; color:#000000; font-size: 11px; font-weight: bold;">${country}</p>     

                    <p style="position: absolute; top: 254px; left: 345px; color:#000000; font-size: 11px; font-weight: bold;">${PassportNo}</p>     

                    <p style="position: absolute; top: 285px; left: 345px; color:#000000; font-size: 11px; font-weight: bold;">${ped}</p>     

                    <p style="position: absolute; top: 353px; left: 30.3%; color:#000000; font-size: 11px; font-weight: bold; text-align: center; transform: translateX(-50%);">${StatusofStay}</p>

                    <p style="position: absolute; top: 353px; left: 59.6%; color:#000000; font-size: 11px; font-weight: bold; text-align: center; transform: translateX(-50%);">${Year}</p>

                    <p style="position: absolute; top: 353px; left: 85.7%; color:#000000; font-size: 11px; font-weight: bold; text-align: center; transform: translateX(-50%);">${NumberofEntries}</p>


                    <p style="position: absolute; top: 397px; left: 30.3%; color:#000000; font-size: 11px; font-weight: bold; text-align: center; transform: translateX(-50%);">${Dateoflssue}</p>

                    <p style="position: absolute; top: 397px; left: 59.6%; color:#000000; font-size: 11px; font-weight: bold; text-align: center; transform: translateX(-50%);">${ValidityPeriodofVisa}</p>

                    <p style="position: absolute; top: 393px; left: 84.3%; color:#000000; font-size: 10.3px; font-weight: bold; text-align: center; transform: translateX(-50%);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Korean Erbassy<br>in Thailand</p>

                    <p style="position: absolute; top: 438px; left: 25%; color:#000000; font-size: 11px; font-weight: bold;">${Remarkds}</p>     
                  </div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
                <script>
                    window.onload = function() {
                        html2canvas(document.getElementById('capture')).then(canvas => {
                            document.body.appendChild(canvas);
                            const link = document.createElement('a');
                            link.download = 'output.png';
                            link.href = canvas.toDataURL();
                            link.click();
                        });
                    };
                </script>
            </body>
            </html>
        `);
    };

    if (imageUpload) {
        reader.readAsDataURL(imageUpload);
    } else {
        alert('กรุณาอัพโหลดรูปภาพ');
    }
});
