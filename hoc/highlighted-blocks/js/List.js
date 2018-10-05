'use strict';

const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return ( <UpdateVideo { ...item}/>);

            case 'article':
                return ( <UpdateArticle { ...item}/>);
        }
    });
};


function withUpdate(Component) {
    return class extends React.Component {
        render() {
            console.log(this.props);
            if(this.props.views < 100) return <New> <Component { ...this.props}/> </New>;
            if(this.props.views > 1000) return <Popular> <Component { ...this.props}/> </Popular>;
            return <Component { ...this.props}/>;
        }
    }
}

const UpdateVideo = withUpdate(Video);
const UpdateArticle = withUpdate(Article);