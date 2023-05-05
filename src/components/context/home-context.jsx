import { createContext, useContext, useEffect, useState } from 'react';
import { GetData } from '../../hooks/request';

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [rates, setRates] = useState()
    const [faq, setFaq] = useState()
    const [calculateList, setCalculateList] = useState()
    const [carousels, setCarousels] = useState()
    const [individualcreditType, setIndividualcreditType] = useState()
    const [individualcredit, setIndividualcredit] = useState()
    const [legalcredit, setLegalcredit] = useState()
    const [products, setProducts] = useState()
    const [whosecredit, setWhosecredit] = useState()
    const [lang, setLang] = useState('ru');
    const [active, setActive] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        GetData(`/exchange-rates/`, lang)
            .then(data => {
                setRates(data)
            })
            .catch(err => console.log(err))
        GetData(`/FAQ/`, lang)
            .then(data => {
                setFaq(data)
            })
            .catch(err => console.log(err))
        GetData(`/carousels/`, lang)
            .then(data => {
                setCarousels(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
        GetData(`/individual-credit-type/`, lang)
            .then(data => {
                setIndividualcreditType(data)
            })
            .catch(err => console.log(err))
        GetData(`/individual-credit/`, lang)
            .then(data => {
                setIndividualcredit(data)
            })
            .catch(err => console.log(err))
        GetData(`/legal-credit/`, lang)
            .then(data => {
                setLegalcredit(data)
            })
            .catch(err => console.log(err))
        GetData(`/products/`, lang)
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.log(err))
        // GetData(`/whose-credit/`, lang)
        //     .then(data => {
        //         setWhosecredit(data)
        //     })
        //     .catch(err => console.log(err))
        if (lang) {
            localStorage.setItem('lang', lang);
            setLang(lang);
        }
        else {
            localStorage.removeItem('lang');
            setLang(lang);
        }
    }, [lang])

    const value = {
        rates, setRates,
        faq, setFaq,
        calculateList, setCalculateList,
        carousels, setCarousels,
        individualcreditType, setIndividualcreditType,
        individualcredit, setIndividualcredit,
        legalcredit, setLegalcredit,
        products, setProducts,
        whosecredit, setWhosecredit,
        lang, setLang,
        loading, setLoading,
        active, setActive
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)