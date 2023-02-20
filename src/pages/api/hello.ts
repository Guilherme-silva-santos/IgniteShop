import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req:NextApiRequest, res:NextApiResponse) {
    return res.json({message: ''})
}

// para que ações do usuario possa ser executada dentro do servidor, como chamdas senciveis 
// como por exeplo uma chamada de api