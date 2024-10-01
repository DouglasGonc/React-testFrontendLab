"use client" // O hook useClient é essencial para gerenciar a comunicação com um serviço externo, como uma API RESTful, em um projeto React JS. Ele permite separar as preocupações de comunicação do servidor dos componentes de apresentação, promovendo um código mais limpo e modular.
import styled from 'styled-components';

interface HeaderProps { }

const TagHeader = styled.header`
    
`
const FlexHeader = styled.section`

`
const ButtonContato = styled.a`

`

export function Header(props : HeaderProps){
    return(
        <TagHeader>
            <section>
                <FlexHeader style={{ height: '39px' }}>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </FlexHeader>
            </section>
            <section>
                <FlexHeader>
                    <div>
                        <ButtonContato>Entre em contato</ButtonContato>
                    </div>
                </FlexHeader>
            </section>
        </TagHeader>
    )
}