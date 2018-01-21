var React = require('react');

var About = (props)=>{
        return (
            <div>
            <h1 className='text-center page-title '>About</h1>
            <p>about page</p>
            <p> Tools used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - JavaScript framework
                </li>
                <li>
                    <a href="https://openweathermap.org">open weather map</a> - weather api
                </li>
            </ul>

            </div>
        )
    }



module.exports = About;