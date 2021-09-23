import HeadlessUIModal from '../HeadlessUIModal'
import ModalHeader from '../ModalHeader'
import React, { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useRarity from '../../../hooks/useRarity'
import useActiveWeb3React from '../../../hooks/useActiveWeb3React'
import { BURN_ADDRESS, RARITY_HELPER_ADDRESS } from '../../../constants'
import useRarityLibrary, { SummonerFullData } from '../../../hooks/useRarityLibrary'
import { chunkArrayByNumber } from '../../../functions/array'
import useRarityHelper from '../../../hooks/useRarityHelper'

interface AdventureModalProps {
    open: boolean
    closeFunction: () => void
    summoners: SummonerFullData[]
}

export default function AdventureModal({ open, closeFunction, summoners }: AdventureModalProps): JSX.Element {
    const { account } = useActiveWeb3React()

    const { isApprovedForAll, setApprovalForAll } = useRarity()
    const { adventure, adventure_donate } = useRarityHelper()

    const [approved, setApproved] = useState(false)

    const fetch_approval = useCallback(async () => {
        const approved = await isApprovedForAll(account, RARITY_HELPER_ADDRESS)
        setApproved(approved)
    }, [account, isApprovedForAll])

    useEffect(() => {
        fetch_approval()
    }, [summoners, fetch_approval])

    async function submit() {
        const chunks = chunkArrayByNumber(summoners, 100)
        for (let i = 0; i < chunks.length; i++) {
            await toast.promise(
                adventure(
                    chunks[i].map((s) => {
                        return s.id
                    })
                ),
                {
                    loading: (
                        <b>
                            Sending chunk: {i + 1} of {chunks.length}{' '}
                        </b>
                    ),
                    success: <b>Success</b>,
                    error: <b>Failed</b>,
                }
            )
        }
    }

    async function submitTIP() {
        const chunks = chunkArrayByNumber(summoners, 100)
        for (let i = 0; i < chunks.length; i++) {
            if (i === 0) {
                await toast.promise(
                    adventure_donate(
                        chunks[i].map((s) => {
                            return s.id
                        })
                    ),
                    {
                        loading: (
                            <b>
                                Sending chunk: {i + 1} of {chunks.length}{' '}
                            </b>
                        ),
                        success: <b>Success</b>,
                        error: <b>Failed</b>,
                    }
                )
            } else {
                await toast.promise(
                    adventure(
                        chunks[i].map((s) => {
                            return s.id
                        })
                    ),
                    {
                        loading: (
                            <b>
                                Sending chunk: {i + 1} of {chunks.length}{' '}
                            </b>
                        ),
                        success: <b>Success</b>,
                        error: <b>Failed</b>,
                    }
                )
            }
        }
    }

    async function approveHelper() {
        toast
            .promise(setApprovalForAll(RARITY_HELPER_ADDRESS), {
                loading: <b>Approving helper contract</b>,
                success: <b>Success</b>,
                error: <b>Failed</b>,
            })
            .then(() => setApproved(true))
    }

    return (
        <HeadlessUIModal isOpen={open} onDismiss={closeFunction}>
            <div className="bg-background-end rounded-lg border-2 border-white">
                <ModalHeader title="adventure summoners" onClose={closeFunction} />
                <div className="text-center text-white p-4 pb-8 gap-5">
                    {summoners.length > 0 ? (
                        <div>
                            <h2>
                                You have {summoners.length}{' '}
                                summoners available to send for adventure.{' '}
                            </h2>
                            {summoners.length >= 100 && (
                                <h2 className="mt-1">We will send 1 transaction for each 100 summoners</h2>
                            )}
                            {approved ? (
                                <>
                                    {summoners.length >= 10 && (
                                        <div>
                                            <button
                                                onClick={() => submitTIP()}
                                                className="bg-green border-white border-2 p-2 uppercase rounded-lg mt-4"
                                            >
                                                send with 0.1 FTM tip for devs
                                            </button>
                                        </div>
                                    )}
                                    <div>
                                        <button
                                            onClick={() => submit()}
                                            className="bg-green border-white border-2 p-2 uppercase rounded-lg mt-4"
                                        >
                                            send summoners
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <button
                                    onClick={() => approveHelper()}
                                    className="bg-green border-white border-2 p-2 uppercase rounded-lg mt-4"
                                >
                                    approve helper
                                </button>
                            )}
                        </div>
                    ) : (
                        <div>
                            <h2>No summoners available for adventure   </h2>
                        </div>
                    )}
                </div>
            </div>
        </HeadlessUIModal>
    )
}
