import React, { useState } from 'react'
import { Alert, Button, Calendar, Card } from 'antd';
import moment from 'moment';
import { loadAPI } from 'common/helpers/api';

const AuditLog = () => {

    const [selectedValue, setSelectedValue] = useState(moment(new Date()))

    const onDateChange = (value) => {
        console.log(value);
        setSelectedValue(value)
    }

    const getLog = async () => {

        await loadAPI('/log/', {
            method: 'POST',
            params: {
                date: selectedValue.format('YYYY-MM-DD HH:MM')
            },
        })

    }

    return (
        <Card style={{textAlign: 'center', padding: '40px'}}>
            <Alert message={`You selected date: ${selectedValue && selectedValue.format('DD-MM-YYYY')}`} />
            <br/>
            <Calendar style={{margin: '20px 150px'}} fullscreen={false} onSelect={onDateChange} onPanelChange={onDateChange} />
            <br/><br/>
            <Button onClick={getLog} type='primary'>Check Log</Button>
        </Card>
    )
}

export default AuditLog
