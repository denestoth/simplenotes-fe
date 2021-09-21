import React from 'react'
import TagService from '../service/TagService'

class TagListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tags:[]
        };
    }

    componentDidMount() {
        TagService.getTags().then((response) => {
            this.setState({tags: response.data});
        });
    }

    render() {
        return(
            <div>
                <table className = 'table table-striped'>
                    <tbody>
                        {
                            this.state.tags.map(
                                tag =>
                                <tr key = {tag.id}>
                                    <td>{tag.text}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default TagListComponent