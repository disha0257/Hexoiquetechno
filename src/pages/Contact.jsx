import "./Contact.css";
import "../App.css";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Globe,
  MessageCircle,
  Briefcase,
  CheckCircle,
} from "lucide-react";


function Contact() {


const navigate = useNavigate();

const formRef = useRef(null);


const [formData,setFormData] = useState({
  name:"",
  email:"",
  company:"",
  phone:"",
  message:""
});


const [errors,setErrors] = useState({});

const [success,setSuccess] = useState("");



// scroll form

const scrollToForm = ()=>{

formRef.current?.scrollIntoView({
behavior:"smooth",
block:"start"
});

};



// input change

const handleChange=(e)=>{

const {name,value}=e.target;



// phone only number

if(name==="phone"){

if(!/^[0-9]*$/.test(value)) return;

if(value.length>10) return;

}



setFormData({

...formData,

[name]:value

});



setErrors({

...errors,

[name]:""

});


};




// validation

const validate=()=>{


let newErrors={};



// name

if(!formData.name.trim()){

newErrors.name="Name is required";

}



// email

const emailRegex =
/^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail|icloud)\.(com|in)$/;



if(!formData.email.trim()){

newErrors.email="Email is required";

}

else if(!emailRegex.test(formData.email)){

newErrors.email="Enter valid email address";

}



// company

if(!formData.company.trim()){

newErrors.company="Company name is required";

}



// phone


if(!formData.phone.trim()){

newErrors.phone="Phone number required";

}

else if(formData.phone.length!==10){

newErrors.phone="Enter 10 digit mobile number";

}



// message


if(!formData.message.trim()){

newErrors.message="Project details required";

}

else if(formData.message.length < 20){

newErrors.message="Minimum 20 characters required";

}



setErrors(newErrors);


return Object.keys(newErrors).length===0;


};





// submit

const handleSubmit=(e)=>{

e.preventDefault();



if(validate()){


setSuccess(
"Thank you! Your request has been submitted successfully."
);



setFormData({

name:"",
email:"",
company:"",
phone:"",
message:""

});



setTimeout(()=>{

setSuccess("");

},4000);


}



};





const inputClass=(field)=>{

return errors[field] ? "error-input" : "";

};




return (

<div className="contact-page">


<Header/>


<main>


<div className="background-animation">

<span className="bg-circle"></span>
<span className="bg-circle"></span>
<span className="bg-circle"></span>
<span className="bg-circle"></span>
<span className="bg-circle"></span>
<span className="bg-circle"></span>
<span className="bg-circle"></span>
<span className="bg-circle"></span>
<span className="bg-circle"></span>
<span className="bg-circle"></span>

</div>



<section className="contact-hero">


<div className="container hero-grid">



<div className="hero-content">


<span className="hero-tag">
CONTACT HEXONIQUE
</span>



<h1>

Let's Build Your
<br/>
Next Digital
<br/>
Success Story

</h1>



<p>

Whether you're a startup, enterprise, or growing business,
our experts are ready to transform your ideas into innovative
digital solutions.

</p>




<div className="hero-buttons">


<button
className="primary-btn"
onClick={scrollToForm}
>

Get Free Consultation

<ArrowRight size={18}/>

</button>



<button

className="secondary-btn"

onClick={()=>navigate("/services")}

>

View Services

</button>



</div>




<div className="hero-features">


<div>
<CheckCircle size={18}/>
Free Consultation
</div>


<div>
<CheckCircle size={18}/>
24/7 Support
</div>


<div>
<CheckCircle size={18}/>
Fast Delivery
</div>



</div>



</div>






<div
className="contact-form-card"
ref={formRef}
>


<h2>
Request a Quote
</h2>


<p>
Fill out the form and our team will contact you within 24 hours.
</p>





{
success &&

<div className="success-box">

{success}

</div>

}





<form onSubmit={handleSubmit}>



<input

className={inputClass("name")}

type="text"

name="name"

value={formData.name}

onChange={handleChange}

placeholder="Your Name"

/>


<span>{errors.name}</span>





<input

className={inputClass("email")}

type="email"

name="email"

value={formData.email}

onChange={handleChange}

placeholder="Email Address"

/>


<span>{errors.email}</span>







<input

className={inputClass("company")}

type="text"

name="company"

value={formData.company}

onChange={handleChange}

placeholder="Company Name"

/>


<span>{errors.company}</span>








<input

className={inputClass("phone")}

type="text"

name="phone"

value={formData.phone}

onChange={handleChange}

placeholder="Phone Number"
maxLength="10"

/>


<span>{errors.phone}</span>








<textarea

className={inputClass("message")}

rows="5"

name="message"

value={formData.message}

onChange={handleChange}

placeholder="Tell us about your project..."

></textarea>


<span>{errors.message}</span>






<button type="submit">


<Send size={18}/>

Send Message


</button>



</form>


</div>



</div>


</section>






<section className="contact-info">

<div className="container cards">


<div className="card">

<Mail/>

<h3>Email</h3>

<p>
<a href="mailto:hexoniquetechno@gmail.com">
hexoniquetechno@gmail.com
</a>
</p>

</div>





<div className="card">

<Phone/>

<h3>Phone</h3>

<p>
<a href="tel:+9195863XXXXX">
+91 95863 XXXXX
</a>
</p>

</div>






<div className="card">

<MapPin/>

<h3>Location</h3>

<p>
Rajkot, Gujarat
</p>

</div>






<div className="card">

<Clock/>

<h3>Working Hours</h3>

<p>
Mon - Sat | 10 AM - 7 PM
</p>

</div>



</div>

</section>






<section className="why-contact">


<div className="container">


<div className="section-heading">


<span>
WHY HEXONIQUE
</span>


<h2>
Trusted Technology Partner
</h2>


<p>
Delivering scalable software solutions with innovation,
quality, and long-term business value.
</p>


</div>





<div className="features">



<div className="feature">

<Globe/>

<h3>
Global Delivery
</h3>

<p>
Serving businesses across India,
USA, UK, UAE and Australia.
</p>


</div>





<div className="feature">

<MessageCircle/>

<h3>
Dedicated Support
</h3>

<p>
Transparent communication and continuous assistance.
</p>


</div>





<div className="feature">

<Briefcase/>

<h3>
Professional Team
</h3>

<p>
Experienced developers creating secure
and scalable digital products.
</p>


</div>




</div>


</div>


</section>



</main>



<Footer/>


</div>


);

}


export default Contact;