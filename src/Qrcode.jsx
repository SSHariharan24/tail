import "./Qr.css";
import {useState} from "react";
export const QrCode = () => {
const [img, setImg] = useState("");
const [loading,setLoading] = useState("true");
const [qrData,setQrData] = useState("https://www.youtube.com");
const [qrSize, setQrSize] = useState("150");


async function generateQR(){
setLoading(true);
try {
	const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
	setImg(url);
}catch(error){
		console.error("Error generating QR Code ",error); 
	} finally {
	setLoading(false);
}

 	// setImg("qrcode.png")
// 	alert("hi")
 }
function downloadQR(name){
	fetch(img)
	.then((response) => response.blob())
	.then((blob)=>{
		const link = document.createElement("a");
		link.href = URL.createObjectURL(blob);
		link.download="qrcode.png";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
}).catch((error)=> {
console.error("Error in download QR code",error);
});
	
// alert("welcome "+ name)
 }

	

return (<div className="app-container">
	<h1>QR CODE GENERATOR</h1>
	{loading && <p>please wait..</p>}
	{ img && <img src={img} className="qr-code-image"  height={250} width={300}/> }
	<div>
		<lable htmlFor="dataInput" className="input-label">
			Data for QR CODE:
		</lable>
		<input type="text" value={qrData} id="dataInput" placeholder="Enter data for QR Code" onChange={(e)=>
		setQrData(e.target.value)}/>

		<lable htmlFor="sizeInput" className="input-label">
			Image size (e.g.,150):
		</lable>
		<input type="text" id="sizeInput" value={qrSize} placeholder="Enter image size" onChange={(e)=>
		setQrSize(e.target.value)}/>

		<button className="generate-button"  onClick={generateQR}>Generate QR Code</button>
		<button className="download-button"  onClick={downloadQR}>Download QR Code </button>

	</div>
	<p className="footer">Desinged By <a href="">HariharanSS</a></p>
</div>);
};