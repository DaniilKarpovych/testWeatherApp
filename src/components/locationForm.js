import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from "../elements/input"
import { Context } from '../lib/settingContext';
import './locationForm.css'


export const LocationForm = () => {
    const {setCoordinate, setAllowment} = useContext(Context)
    const form = useForm({
        mode:     'onTouched',
    });

    const onSubmit = form.handleSubmit(async (credentials) => {
        setCoordinate(`/?query=${credentials.location}`)
        setAllowment(false)
        form.reset();
    });


    return(
        <div >
        <form onSubmit = { onSubmit }>
                <fieldset className='field'>
                    <Input
                        label = 'Enter the point'
                        error = { form.formState.errors.email }
                        register = { form.register('location') } />
                        <button type='submit'>search</button>
                        </fieldset>
                        
        </form>
        </div>
    )
}
