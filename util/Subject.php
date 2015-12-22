<?php

/**
 * User: WQH
 * Date: 15/12/20
 * Time: 下午8:36
 */
class Subject implements SplSubject
{

    var $mObserver = null;

    public function __construct()
    {
        $this->mObserver = new ArrayObject();
    }

    public function attach(SplObserver $observer)
    {
        $this->mObserver->append($observer);
    }


    public function detach(SplObserver $observer)
    {
    }


    public function notify()
    {
        if (!empty($this->mObserver)) {
            foreach ($this->mObserver as $observer) {
                $observer->update($this);
            }
        }
    }
}