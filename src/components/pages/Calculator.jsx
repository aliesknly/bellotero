import React from 'react';
//Component
import { Row, Col, FormGroup, CustomInput } from 'reactstrap';
import Labels from './modules/Labels';
import Values from './modules/Values';
import Counter from './modules/Counter';
import Total from './modules/Total';
import Label from './modules/Labels';

const Calculator = () => {
    return (
        <div>
            <div style={styles.boxLabels}>
                <div>
                    <Labels >Monthly <br/> ingredient spending</Labels>
                </div>
                <div>
                    <Values>35.690</Values>
                </div>
            </div>
            <Row>
                <Col>
                    <FormGroup>
                        <CustomInput type="range" id="exampleCustomRange" name="customRange" />
                    </FormGroup>
                </Col>
            </Row>
            <div style={styles.boxLabels}>
                <div >
                    <Labels >Full-time employees that <br/> process invoices</Labels>
                </div>
                <div >
                    <Counter>8</Counter>
                </div>
            </div>
            <Row>
                <Col sm={12}>
                    <FormGroup>
                        <CustomInput type="range" id="exampleCustomRange" name="customRange" />
                    </FormGroup>
                </Col>
            </Row>
            <br />
                <div style={styles.box}>
                    <div style={styles.totals}>
                        <Total>8.600</Total>
                        <Label>Estimated cost food savings</Label>
                    </div>
                    <div style={styles.totals}>
                        <Total>36.600</Total>
                        <Label>Estimated cost food savings</Label>
                    </div>
                </div>

        </div>
    )
}

const styles = {
    box: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'end',
    },
    boxLabels: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection:'row',
    },
    totals: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
}

export default Calculator