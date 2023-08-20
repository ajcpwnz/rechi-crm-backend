import express from 'express';
import passport from 'passport'
import Donator from "../models/Donator";
import {CreationAttributes, Sequelize} from "sequelize";
import DonatorThing from "../models/DonatorThing";
import {getStatusCodeFromError} from "../utils/getter-status-code-from-error";
import {ControllerError} from "../interfaces/controller-error.interface";

const router = express();

interface PetsDonationDto {
    donator_id: number;
    product_id: number;
    size_id: number;
    quantity: number;
    nickname: string;
    name: string;
    phone: string;
    proposal_date: Date;
}

router.post(
    '/create/pets-donation',
    passport.authenticate('jwt', { session: false }),
    async (request, response, next) => {
        try {
            const donator: Omit<CreationAttributes<Donator>, 'id'> = {
                name: request.body.name,
                nickname: request.body.nickname,
                phone: request.body.phone,
                proposal_date: request.body.proposal_date
            };
            await Donator.create(donator);

            const donate:  Omit<CreationAttributes<DonatorThing>, 'id'>  = {
                donator_id: request.body.donator_id,
                product_id: request.body.product_id,
                size_id: request.body.size_id,
                quantity: request.body.quantity
            };
            await DonatorThing.create(donate);
        } catch (error) {
            const errorStatusCode = getStatusCodeFromError(error);
            if (errorStatusCode !== 500) {
                response.status(errorStatusCode).send(error);
            } else {
                next(new ControllerError(request, error as Error));
            }
        }
    });
