import React, { useEffect } from "react";

const AboutUs = () => {

    const listItemStyle = {
        all: "none",
        marginBottom: '10px',
    };

    const paragraphStyle = {
        all: "none",
        fontWeight: 'bold',
        color: '#333',
    };


    useEffect(() => {
        //document.getElementById("path01").style.strokeDashoffset -= 304;
        document.addEventListener('scroll', () => {
            console.log("path01");
            //document.getElementById("path01").style.strokeDashoffset -= 1;
        })
    });
    



    return (
        <div style={{alignitems:"center"} }>

            

            <h2 class="page-title" >
                About Us
            </h2>

            <div style={{ width: "100%" }}>

                
                
                <p class="p3" style = {{display:"block"} }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100" viewBox="0 0 54 10" fill="none" stroke="white" >
                        <path id="path" class = "path" style={{"--length":"315",strokeWidth : ".01rem"}} d="M4.272 0.539999H5.064L6.264 3.564L7.476 0.539999H8.28L6.792 4.176L8.424 8.028L11.508 0.48H12.42L8.808 9H8.064L6.276 4.788L4.476 9H3.744L0.144 0.48H1.044L4.14 8.028L5.76 4.176L4.272 0.539999ZM15.3422 9.12C14.8942 9.12 14.4782 9.036 14.0942 8.868C13.7102 8.692 13.3782 8.456 13.0982 8.16C12.8182 7.856 12.5982 7.508 12.4382 7.116C12.2862 6.724 12.2102 6.304 12.2102 5.856C12.2102 5.272 12.3422 4.736 12.6062 4.248C12.8782 3.76 13.2502 3.372 13.7222 3.084C14.1942 2.788 14.7302 2.64 15.3302 2.64C15.9462 2.64 16.4822 2.788 16.9382 3.084C17.4022 3.38 17.7662 3.772 18.0302 4.26C18.2942 4.74 18.4262 5.268 18.4262 5.844C18.4262 5.908 18.4262 5.972 18.4262 6.036C18.4262 6.092 18.4222 6.136 18.4142 6.168H13.0622C13.1022 6.616 13.2262 7.016 13.4342 7.368C13.6502 7.712 13.9262 7.988 14.2622 8.196C14.6062 8.396 14.9782 8.496 15.3782 8.496C15.7862 8.496 16.1702 8.392 16.5302 8.184C16.8982 7.976 17.1542 7.704 17.2982 7.368L18.0062 7.56C17.8782 7.856 17.6822 8.124 17.4182 8.364C17.1542 8.604 16.8422 8.792 16.4822 8.928C16.1302 9.056 15.7502 9.12 15.3422 9.12ZM13.0382 5.58H17.6582C17.6262 5.124 17.5022 4.724 17.2862 4.38C17.0782 4.036 16.8022 3.768 16.4582 3.576C16.1222 3.376 15.7502 3.276 15.3422 3.276C14.9342 3.276 14.5622 3.376 14.2262 3.576C13.8902 3.768 13.6142 4.04 13.3982 4.392C13.1902 4.736 13.0702 5.132 13.0382 5.58ZM19.7212 0.24H20.5372V7.584C20.5372 7.896 20.5932 8.1 20.7052 8.196C20.8172 8.292 20.9532 8.34 21.1132 8.34C21.2572 8.34 21.4012 8.324 21.5452 8.292C21.6892 8.26 21.8132 8.228 21.9172 8.196L22.0612 8.856C21.9092 8.92 21.7212 8.972 21.4972 9.012C21.2812 9.052 21.0932 9.072 20.9332 9.072C20.5652 9.072 20.2692 8.964 20.0452 8.748C19.8292 8.532 19.7212 8.236 19.7212 7.86V0.24ZM25.6667 9.12C25.2107 9.12 24.7907 9.036 24.4067 8.868C24.0307 8.692 23.6987 8.452 23.4107 8.148C23.1307 7.844 22.9107 7.496 22.7507 7.104C22.5987 6.712 22.5227 6.296 22.5227 5.856C22.5227 5.264 22.6547 4.724 22.9187 4.236C23.1827 3.748 23.5507 3.36 24.0227 3.072C24.4947 2.784 25.0387 2.64 25.6547 2.64C26.2387 2.64 26.7547 2.776 27.2027 3.048C27.6507 3.312 27.9827 3.672 28.1987 4.128L27.4067 4.38C27.2307 4.06 26.9827 3.812 26.6627 3.636C26.3507 3.452 26.0027 3.36 25.6187 3.36C25.2027 3.36 24.8227 3.468 24.4787 3.684C24.1347 3.9 23.8587 4.196 23.6507 4.572C23.4507 4.948 23.3507 5.376 23.3507 5.856C23.3507 6.328 23.4547 6.756 23.6627 7.14C23.8707 7.524 24.1467 7.832 24.4907 8.064C24.8347 8.288 25.2147 8.4 25.6307 8.4C25.9027 8.4 26.1627 8.352 26.4107 8.256C26.6667 8.16 26.8867 8.032 27.0707 7.872C27.2627 7.704 27.3907 7.524 27.4547 7.332L28.2587 7.572C28.1467 7.868 27.9587 8.136 27.6947 8.376C27.4387 8.608 27.1347 8.792 26.7827 8.928C26.4387 9.056 26.0667 9.12 25.6667 9.12ZM32.146 9.12C31.698 9.12 31.282 9.036 30.898 8.868C30.522 8.692 30.194 8.456 29.914 8.16C29.642 7.856 29.43 7.512 29.278 7.128C29.126 6.736 29.05 6.324 29.05 5.892C29.05 5.444 29.126 5.028 29.278 4.644C29.43 4.252 29.646 3.908 29.926 3.612C30.206 3.308 30.534 3.072 30.91 2.904C31.294 2.728 31.71 2.64 32.158 2.64C32.606 2.64 33.018 2.728 33.394 2.904C33.77 3.072 34.098 3.308 34.378 3.612C34.658 3.908 34.874 4.252 35.026 4.644C35.178 5.028 35.254 5.444 35.254 5.892C35.254 6.324 35.178 6.736 35.026 7.128C34.874 7.512 34.658 7.856 34.378 8.16C34.106 8.456 33.778 8.692 33.394 8.868C33.018 9.036 32.602 9.12 32.146 9.12ZM29.878 5.904C29.878 6.368 29.978 6.792 30.178 7.176C30.386 7.552 30.662 7.852 31.006 8.076C31.35 8.292 31.73 8.4 32.146 8.4C32.562 8.4 32.942 8.288 33.286 8.064C33.63 7.84 33.906 7.536 34.114 7.152C34.322 6.76 34.426 6.336 34.426 5.88C34.426 5.416 34.322 4.992 34.114 4.608C33.906 4.224 33.63 3.92 33.286 3.696C32.942 3.472 32.562 3.36 32.146 3.36C31.73 3.36 31.35 3.476 31.006 3.708C30.67 3.94 30.398 4.248 30.19 4.632C29.982 5.008 29.878 5.432 29.878 5.904ZM45.9188 9H45.1028V5.508C45.1028 4.78 44.9868 4.244 44.7548 3.9C44.5228 3.556 44.1788 3.384 43.7228 3.384C43.2508 3.384 42.8268 3.552 42.4508 3.888C42.0828 4.224 41.8228 4.656 41.6708 5.184V9H40.8548V5.508C40.8548 4.772 40.7428 4.236 40.5188 3.9C40.2948 3.556 39.9508 3.384 39.4868 3.384C39.0228 3.384 38.6028 3.548 38.2268 3.876C37.8508 4.204 37.5868 4.636 37.4348 5.172V9H36.6188V2.748H37.3628V4.164C37.6268 3.676 37.9628 3.3 38.3708 3.036C38.7868 2.772 39.2468 2.64 39.7508 2.64C40.2708 2.64 40.6908 2.788 41.0108 3.084C41.3308 3.38 41.5268 3.768 41.5988 4.248C41.8868 3.72 42.2308 3.32 42.6308 3.048C43.0388 2.776 43.4988 2.64 44.0108 2.64C44.3628 2.64 44.6588 2.704 44.8988 2.832C45.1468 2.96 45.3428 3.144 45.4868 3.384C45.6388 3.616 45.7468 3.9 45.8108 4.236C45.8828 4.564 45.9188 4.932 45.9188 5.34V9ZM50.3461 9.12C49.8981 9.12 49.4821 9.036 49.0981 8.868C48.7141 8.692 48.3821 8.456 48.1021 8.16C47.8221 7.856 47.6021 7.508 47.4421 7.116C47.2901 6.724 47.2141 6.304 47.2141 5.856C47.2141 5.272 47.3461 4.736 47.6101 4.248C47.8821 3.76 48.2541 3.372 48.7261 3.084C49.1981 2.788 49.7341 2.64 50.3341 2.64C50.9501 2.64 51.4861 2.788 51.9421 3.084C52.4061 3.38 52.7701 3.772 53.0341 4.26C53.2981 4.74 53.4301 5.268 53.4301 5.844C53.4301 5.908 53.4301 5.972 53.4301 6.036C53.4301 6.092 53.4261 6.136 53.4181 6.168H48.0661C48.1061 6.616 48.2301 7.016 48.4381 7.368C48.6541 7.712 48.9301 7.988 49.2661 8.196C49.6101 8.396 49.9821 8.496 50.3821 8.496C50.7901 8.496 51.1741 8.392 51.5341 8.184C51.9021 7.976 52.1581 7.704 52.3021 7.368L53.0101 7.56C52.8821 7.856 52.6861 8.124 52.4221 8.364C52.1581 8.604 51.8461 8.792 51.4861 8.928C51.1341 9.056 50.7541 9.12 50.3461 9.12ZM48.0421 5.58H52.6621C52.6301 5.124 52.5061 4.724 52.2901 4.38C52.0821 4.036 51.8061 3.768 51.4621 3.576C51.1261 3.376 50.7541 3.276 50.3461 3.276C49.9381 3.276 49.5661 3.376 49.2301 3.576C48.8941 3.768 48.6181 4.04 48.4021 4.392C48.1941 4.736 48.0741 5.132 48.0421 5.58ZM54.8931 6.264V0.396H55.7091V6.264H54.8931ZM54.8931 9V7.656H55.7091V9H54.8931Z" />
                </svg>
                Welcome to our website! Here, we delve into the fascinating and complex world of technology, with a particular focus on exploring the ethical issues that arise from its rapid advancement. Our mission is to foster awareness and promote thought-provoking discussions surrounding the intersection of technology and ethics.
            </p>

                
                
            <p class="p3">
                In today's interconnected society, technology plays an increasingly influential role in shaping our lives. From artificial intelligence and automation to data privacy and algorithmic biases, every technological breakthrough brings with it a host of ethical considerations. We believe that understanding these ethical dilemmas is crucial for creating a sustainable and responsible technological landscape.
            </p>
            <p class="p3">
                Our platform serves as a platform for critical analysis and exploration of the ethical challenges arising from emerging technologies. We aim to shed light on the potential consequences of technological advancements, emphasizing the importance of responsible innovation. By engaging in open dialogues and thoughtfully examining the impact of technology, we hope to contribute to a more ethically conscious society.
                </p>

                

            <p class="p3">
                Through our articles, opinion pieces, and expert interviews, we strive to provide a comprehensive and balanced perspective on the ethical issues surrounding technology. Our content covers a wide range of topics, including:
                </p>

            </div>
            

            <div style={{
                display: "grid", gridTemplateColumns:" 1fr 1fr", margin: "4em 20%"
            }}>
                <p className="p0">
                    <a href="../computers-in-the-work-force" className="p0-title"><button>Computers in the Workforce:</button></a> Explore the impact of computers and automation on the modern workforce, including the potential for job displacement, changing skill requirements, and the ethical considerations surrounding human-machine collaboration.
                </p>

              

            <p className="p0">
                    <a href="../automated-decision-making" className="p0-title"><button>Automated Decision Making:</button></a> Examine the ethical implications of automated decision-making systems, such as algorithms and machine learning models, and their potential biases, transparency issues, and societal consequences.
            </p>
            <p className="p0" >
                    <a href="../artificial-intelligence" className="p0-title"><button>Artificial Intelligence:</button></a> Delve into the ethical challenges arising from the development and deployment of artificial intelligence technologies, including topics like AI ethics, accountability, privacy concerns, and the ethical use of AI in various domains.
            </p>
            <p className="p0" >
                    <a href="../environmental-effects" className="p0-title"><button>Environmental Effects:</button></a> Investigate the environmental impact of technology, including issues such as e-waste, energy consumption, carbon footprint, and the pursuit of sustainable and eco-friendly technological practices.
            </p>
            </div>
            <div style={{
                display: "grid", margin: "4em 20%"
            }}>
            <p className="p0" >
                    <a href="../ethical-issues" className="p0-title"><button>Ethical Issues:</button></a> Discuss a wide range of ethical issues associated with technology, including privacy, data security, digital rights, social impact, equity, fairness, and the ethical responsibilities of technology creators and users.
                </p>
                </div>

            <p class="p3">
                We encourage you to join the conversation by exploring our articles and sharing your thoughts and insights. Together, let's navigate the complex ethical landscape of technology, fostering a responsible and inclusive technological future for all.
            </p>
        </div>
    );
};

export default AboutUs;