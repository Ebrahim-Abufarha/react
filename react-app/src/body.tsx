function Body() {
    return(
        <>  
<section className="home" id="home">
<div className="home-img">
    <img src="b9714347-aff8-478a-a518-cf0a873e04c6.jpg" alt="Profile Image"/>

</div>
<div className="home-content">
    <h3>Hello,Myself</h3>
    <h1>Ibrahim Abufarha</h1>
    <h3>And I'm a <span className="multiple-text">Wep Developer</span></h3>
    <p>Hi, I'm Ibrahim AbuFarha, a passionate Full-Stack Web Developer with a civil engineering background. I turn ideas into reality through code and creativity. Welcome to my world of coding and design.</p>
    <div className="social-media">
        <a href="https://www.linkedin.com/in/ibrahim-abufarhah-553775342"><i className='bx bxl-linkedin'></i></a>
        <a href="https://github.com/Ebrahim-Abufarha"><i className='bx bxl-github'></i></a>
        <a href="https://www.facebook.com/share/hc7bjM3TfQAubPvG/?mibextid=wwXIfr"><i className='bx bxl-facebook' ></i></a>
        <a href="https://www.instagram.com/ebraheem_abufarha/profilecard/?igsh=MWU5ZGh5YXB3dHNtaw=="><i className='bx bxl-instagram' ></i></a>
    </div>
    <a className="btn" href="#">Download CV</a>

</div>

</section>

<section className="about" id="about">
<div className="about-content">
<h2 className="heading">About <span>Me</span></h2>
<h3>I'm a <span>Full-Stack Devoloper</span></h3>
<p>I am a Civil Engineering graduate from the className of 2020. Currently, I am a Full-Stack Web Development trainee at Orange Academy, undergoing a six-month intensive training program in late 2024 to enhance my skills and expertise in web development.</p>
<a href="" className="btn">Read More</a>
</div>
<div className="about-img">
    <img src="222.jpg" alt="About Image"/>
</div>








</section>

<section className="services" id="services">
<h2 className="heading">My <span>Services</span></h2>
<div className="services-container">
    <div className="services-box">

        <i className='bx bx-code'></i>

        <h3>Web Developer</h3>
    <p>I create modern and responsive websites tailored to your needs. With expertise in coding and design, I ensure a seamless user experience and functional interfaces to enhance your online presence.</p>        
    <a href="#" className="btn">Read More</a>
    </div>
    
    
    
    <div className="services-box">
        <i className='bx bxl-instagram' ></i> 
        <h3>UI/UX Design</h3>

        <p>Crafting intuitive and visually appealing designs that enhance user interaction and engagement. From user flows to stunning interfaces, I create seamless experiences for digital products.</p>     
        <a href="#" className="btn">Read More</a>
    </div>
    <div className="services-box">
        <i className='bx bxs-home-heart'></i>
                <h3>Civil Engineering</h3>
        <p>Crafting intuitive and visually appealing designs that enhance user interaction and engagement. From user flows to stunning interfaces, I create seamless experiences for digital products.</p>
        <a href="#" className="btn">Read More</a>
    </div>
</div>








</section>

<section className="testimonial" id="testimonial">
    <div className="testimonial-box">
        <h2 className="heading">My Work</h2>

        <div className="wrapper">
            <div className="testimonial-item">
                <img src="work3.png" alt=""/>
          
            
            </div>

            <div className="testimonial-item">
                <img src="work1.png" alt=""/>
               
            
            
            
            </div>


            <div className="testimonial-item">
                <img src="work2.png" alt=""/>
            
            
            
            </div>

        </div>

    </div>








</section>
</>
    )
}
export default Body;