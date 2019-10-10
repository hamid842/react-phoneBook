import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import MyModal from './modal';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <MyModal />
                <Button color="info" id="toggler1" style={{ marginBottom: '1rem' }}>
                    Quick Search
                </Button>
                <Button color="info" id="toggler2" style={{ marginBottom: '1rem' }}>
                    Advanced Search
                </Button>

                <UncontrolledCollapse toggler="#toggler1">
                    <Card>
                        <CardBody>
                            <input id="inputFname" type="text" className="rounded-sm" placeholder="Enter first name" />
                            <input id="inputLname" type="text" className="rounded-sm" placeholder="Enter last name" />
                            <input id="inputBdate" type="text" className="rounded-sm" placeholder="Enter birth date" />
                            <input id="quickSearchBtn" type="button" className="rounded-sm" value="Search"
                                onclick="quickSearch()" />
                            <input id="quickRefreshBtn" type="button" className="rounded-sm" value="Refresh"
                                onclick="quickSearchRefreshBtn()" />
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <UncontrolledCollapse toggler="#toggler2">
                    <Card>
                        <CardBody>
                            <input id="inputAdvFname" type="text" className="rounded-sm" placeholder="Enter first name" />
                            <input id="inputAdvLname" type="text" className="rounded-sm" placeholder="Enter last name" />
                            <input id="inputAdvBdate" type="text" className="rounded-sm" placeholder="Enter birth date" />
                            <input id="inputAdvEmail" type="text" className="rounded-sm" placeholder="Enter email address" />
                            <input id="advSearchBtn" type="button" className="rounded-sm" value="Search"
                                onclick="advancedSearch()" />
                            <input id="advRefreshBtn" type="button" className="rounded-sm" value="Refresh"
                                onclick="advancedSearchRefreshBtn()" />
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        );
    }
}

export default SearchBar;


