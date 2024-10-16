import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './TestimonialSlider.css'; // Ensure this file contains the provided CSS

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    const testimonials = [
        {
            img: 'https://randomuser.me/api/portraits/men/82.jpg',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            name: 'Mark Huff',
            position: 'Businesswoman'
        },
        {
            img: 'https://randomuser.me/api/portraits/men/83.jpg',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            name: 'Rodel Golez',
            position: 'Businesswoman'
        },
        {
            img: 'https://randomuser.me/api/portraits/men/83.jpg',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            name: 'Rodel Golez',
            position: 'Businesswoman'
        },
        {
            img: 'https://randomuser.me/api/portraits/men/83.jpg',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
            name: 'Rodel Golez',
            position: 'Businesswoman'
        }
    ];

    return (
        <div className="testimonials-wrap">
            <div className="container">
                <div className="heading-section">
                    <span className="sub-heading">Testimonials</span>
                    <h2>Happy Clients &amp; Feedbacks</h2>
                </div>
                <Slider {...settings} className="carousel-testimonial">
                    {testimonials.map((testimonial, index) => (
                        <div className="item" key={index}>
                            <div className="testimonial-box d-flex">
                                <div className="user-img" style={{ backgroundImage: `url(${testimonial.img})` }}></div>
                                <div className="text pl-4">
                                    <span className="quote"><i className="fa fa-quote-left"></i></span>
                                    <p>{testimonial.text}</p>
                                    <p className="name">{testimonial.name}</p>
                                    <span className="position">{testimonial.position}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialSlider;
