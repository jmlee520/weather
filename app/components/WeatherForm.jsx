var React = require('react');



var WeatherForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();

        var location = this.refs.location.value;

        if(location.length >0){
            this.props.onSearch(location);
            this.refs.location.value = '';
        }
    },
    render: function(){
        return (

            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location" placeholder='Search weather by city' />
                    <button className='button expanded hollow'> Get Weather </button>

                </form>

            </div>


        );
    }
});

module.exports = WeatherForm;