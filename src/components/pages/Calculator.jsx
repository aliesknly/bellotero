import React, { useState } from 'react';
//Component
import { Row, Col, FormGroup} from 'reactstrap';
import Labels from './modules/Labels';
import Values from './modules/Values';
import Counter from './modules/Counter';
import Total from './modules/Total';
import Label from './modules/Labels';

const Calculator = () => {
    const [ingredient, setIngredient] = useState(36.211);
    const [employee, setEmployee] = useState(8);

    const handleChangeIngredients = ({ target }) => {
        const { value } = target;
        setIngredient(value)
    };
    const handleChangeEmployee = ({ target }) => {
        const { value } = target;
        setEmployee(value)
    };

    return (
        <div>
            <div style={styles.boxLabels}>
                <div>
                    <Labels >Monthly <br /> ingredient spending</Labels>
                </div>
                <div>
                    <Values>{ingredient}</Values>
                </div>
            </div>
            <Row>
                <Col>
                    <FormGroup>
                        <input type="range" 
                        id="ingredientRange" 
                        name="ingredientRange" 
                        min={10} max={100} 
                        onChange={handleChangeIngredients} 
                        defaultValue={ingredient} />
                    </FormGroup>
                </Col>
            </Row>
            <div style={styles.boxLabels}>
                <div >
                    <Labels >Full-time employees that <br /> process invoices</Labels>
                </div>
                <div >
                    <Counter>{employee}</Counter>
                </div>
            </div>
            <Row>
                <Col sm={12}>
                    <FormGroup>
                        <input type="range" 
                        id="employeeRange" 
                        name="employeeRange" 
                        min={1} max={10} 
                        onChange={handleChangeEmployee}
                        defaultValue={employee}/>
                    </FormGroup>
                </Col>
            </Row>
            <br />
            <div style={styles.box}>
                <div style={styles.totals}>
                    <Total>{(ingredient * 0.3).toPrecision(4)}</Total>
                    <Label>Estimated cost food savings</Label>
                </div>
                <div style={styles.totals}>
                    <Total>{employee * 1337 + (ingredient * 0.3)}</Total>
                    <Label>Estimated cost food savings</Label>
                </div>
            </div>

        </div>
    )
};

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
        flexDirection: 'row',
    },
    totals: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
};

export default Calculator