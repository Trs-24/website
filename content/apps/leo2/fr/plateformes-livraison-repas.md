---
title: Plateformes de livraison de repas
position: 5
layout: documentation
meta:
  title: Plateformes de livraison de repas | LEO2 | HubRise
  description: HubRise permet de connecter le logiciel de caisse LEO2 à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

HubRise permet de connecter le logiciel de caisse LEO2 à Deliveroo, Uber Eats, ou Just Eat. Pour plus d'informations, consultez les pages d'aide de ces plateformes, accessibles depuis notre [page Apps](/apps).

Vous trouverez ci-dessous les paramètres à utiliser pour la configuration de ces plateformes.

## Deliveroo

Dans la page de configuration de Deliveroo Bridge, utilisez les codes ref suivants.

| Section          | Nom                                  | Code ref                                                             |
| ---------------- | ------------------------------------ | -------------------------------------------------------------------- |
| Types de service | Code ref livraison par Deliveroo     | Créer un vendeur dans LEO2 et utiliser son code ref.                 |
| Types de service | Code ref livraison par le restaurant | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service | Code ref à emporter                  | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Remises          | Code ref promotion                   | (laisser vide)                                                       |
| Frais            | Code ref frais de livraison          | (laisser vide)                                                       |
| Frais            | Code ref surcharge                   | (laisser vide)                                                       |
| Paiements        | Code ref paiement sur Deliveroo      | Créer un mode de règlement dans LEO2 et utiliser son code ref.       |
| Paiements        | Code ref paiement en espèces         | (laisser vide)                                                       |

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Deliveroo Bridge](/apps/deliveroo/configuration).

## Uber Eats

Dans la page de configuration de Uber Eats Bridge, utilisez les codes ref suivants.

| Section             | Nom                                  | Code ref                                                             |
| ------------------- | ------------------------------------ | -------------------------------------------------------------------- |
| Types de service    | Code ref livraison Uber              | Créer un vendeur dans LEO2 et utiliser son code ref.                 |
| Types de service    | Code ref livraison par le restaurant | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Code ref à emporter                  | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Code ref sur place                   | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Articles spéciaux   | Code ref jetables                    | (laisser vide)                                                       |
| Remises             | Code ref remise                      | (laisser vide)                                                       |
| Paiements           | Code ref paiement                    | Créer un mode de règlement dans LEO2 et utiliser son code ref.       |
| Statuts de commande | Marquer la commande comme Acceptée   | `Lorsque le statut HubRise passe à "Reçue"`                          |
| Statuts de commande | Marquer la commande comme Rejetée    | `Lorsque le statut HubRise passe à "Rejetée"`                        |
| Statuts de commande | Marquer la commande comme Annulée    | `Lorsque le statut HubRise passe à "Annulée"`                        |

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Uber Eats Bridge](/apps/uber-eats/configuration).

LEO2 peut afficher les commentaires produits indiqués par vos clients lors du passage de leur commande.

## Just Eat

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les codes ref suivants.

| Section          | Nom                                  | Code ref                                                             |
| ---------------- | ------------------------------------ | -------------------------------------------------------------------- |
| Types de service | Code ref livraison par la plateforme | Créer un vendeur dans LEO2 et utiliser son code ref.                 |
| Types de service | Code ref livraison par le restaurant | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service | Code ref à emporter                  | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Remises          | Code ref promotion                   | (laisser vide)                                                       |
| Frais            | Code ref frais de livraison          | (laisser vide)                                                       |
| Paiements        | Code ref paiement en ligne           | Créer un mode de règlement dans LEO2 et utiliser son code ref.       |
| Paiements        | Code ref paiement en espèces         | (laisser vide)                                                       |

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Just Eat Takeaway Bridge](/apps/just-eat-takeaway/configuration).