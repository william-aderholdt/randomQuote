import React from 'react';

class Content extends React.Component {
    render() {
        <html>
            <head>
                <link rel="stylesheet" href="styleRandomQuote.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow:400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                <wrapper className="row">
                    <div className="container-fluid">
                        <quoteBox>
                            <quote id="quotes">
                                <p>1</p>
                            </quote>
                            <interactions className="row">
                                <button className="btn btn-primary" style="margin-right: 10px"><i className="fa fa-twitter"><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></i></button>
                                <button className="btn" id="next">Next</button>
                            </interactions>            
                        </quoteBox>
                    </div>
                </wrapper>
            </body>
        </html>
    }
};

ReactDOM.render(
    <Content />
    document.getElementById('main')
)