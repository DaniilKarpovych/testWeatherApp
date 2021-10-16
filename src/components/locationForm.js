import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from "../elements/input"
import { Context } from '../lib/settingContext';


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
                <fieldset disabled = {false}>
                    <legend>Местоположение</legend>
                    <Input
                        label = 'Введите город'
                        error = { form.formState.errors.email }
                        register = { form.register('location') } />
                        <button type='submit'>search</button>
                        </fieldset>
                        
        </form>
        </div>
    )
}
