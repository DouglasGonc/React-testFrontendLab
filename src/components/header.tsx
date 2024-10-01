"use client" // O hook useClient é essencial para gerenciar a comunicação com um serviço externo, como uma API RESTful, em um projeto React JS. Ele permite separar as preocupações de comunicação do servidor dos componentes de apresentação, promovendo um código mais limpo e modular.
import styled from 'styled-components';

interface HeaderProps { }

const TagHeader = styled.header`
    margin: 0 auto;
    max-width: 1200px;
    height: 126;
    padding: 0 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ButtonContato = styled.a`

`

export function Header(props : HeaderProps){
    return(
        <TagHeader>
            <section>
                <div>
                    1
                </div>
                <div>
                    2
                </div>
            </section>
        </TagHeader>
    )
}